'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';

// External Components
import { Box } from 'theme';

import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  timeout,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  DiamondPlugin,
  FrameFadePlugin,
  GLTFAnimationPlugin,
  GroundPlugin,
  BloomPlugin,
  TemporalAAPlugin,
  AnisotropyPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  ITexture,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  IViewerPlugin
} from 'webgi';
import { animateKeyboardOnScroll } from './animation';

export const WebgiViewer = ({ sx, ...props }) => {
  const canvasRef = useRef(null);

  const memoizeScrollAnimation = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) {
      return animateKeyboardOnScroll(position, target, onUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current
    });

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    // Add a popup(in HTML) with download progress when any asset is downloading.
    // await viewer.addPlugin(AssetManagerBasicPopupPlugin);

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    // await viewer.addPlugin(DiamondPlugin);
    // await viewer.addPlugin(FrameFadePlugin);
    // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
    await viewer.addPlugin(BloomPlugin);
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)
    // and many more...

    // or use this to add all main ones at once.
    // await addBasePlugins(viewer);

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    // await viewer.addPlugin(CanvasSnipperPlugin);

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await manager.addFromPath('/glb/keyboard_with_schene.glb');
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsMode: false });

    // Load an environment map if not set in the glb file
    // await viewer.setEnvironmentMap((await manager.importer!.importSinglePath<ITexture>("./assets/environment.hdr"))!);

    // // Add some UI for tweak and testing.
    // const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin);
    // // Add plugins to the UI to see their settings.
    // uiPlugin.setupPlugins(TonemapPlugin, CanvasSnipperPlugin);

    // Animation
    // window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener('preFrame', () => {
      if (needsUpdate) {
        camera.positionUpdated(true);
        needsUpdate = false;
      }
    });

    memoizeScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <Box
      id="webgi-canvas-container"
      sx={{
        width: '100%',
        height: '35rem',
        ...sx
      }}
      {...props}>
      <Box
        id="webgi-canvas"
        as="canvas"
        ref={canvasRef}
        sx={{
          width: '100%',
          height: '100%',
          bg: 'transparent'
        }}
      />
    </Box>
  );
};
