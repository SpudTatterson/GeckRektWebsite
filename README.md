# GECK REKT Website

Standalone landing page for GECK REKT.

## Card maker

Open `/card-maker/` on the development server to create the site's red gameplay
cards. Choose one of six presets, edit the header and body, and adjust margins,
typography, colors, rotation, and PNG resolution. Exports can have a transparent
background. Settings are saved in this browser. The tool is also included in the
production build, without a link in the public navigation.

## Development

```sh
npm install
npm run serve
```

## Production build

```sh
npm run build
```

## Press kit

The static press page is at `/press/`, with site previews in `public/press/assets`.
Drive download links are set directly in `public/press/index.html`, including item-specific
logo, capsule, and music links and folders for screenshots, clips, and reactions.
Update those URLs if items are moved to a different Drive collection.
Image previews open locally in a new tab. Music usage terms are linked beside the tracks.
Keep full-resolution screenshots and artwork, clean footage, and original reaction
PNGs in Drive. The website uses smaller previews. The page is copied into `dist/press/`
by the existing production build.

The four featured footage previews use VP9 WebM at 1280px wide / 30fps, with
individual WebP posters in `public/press/assets`. Full-quality MP4 downloads
remain in Drive. The featured clips include Playing Dangerous Catch.

The quick-access panel above game facts links to all downloads and page sections.
The tongue tug-of-war preview starts at 00:11 of the original TongueStruggle.mp4.
