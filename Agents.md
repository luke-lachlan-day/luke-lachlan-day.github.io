# Agent Notes

## ImageMagick

ImageMagick is available as a portable repo-local install:

```powershell
.\.tools\ImageMagick\magick.exe
```

In PowerShell, invoke it explicitly with `&`:

```powershell
& '.\.tools\ImageMagick\magick.exe' -version
```

The install lives under `.tools/`, which is ignored by git. Do not assume `magick` is available on the system `PATH`; use the repo-local executable path unless a system-wide install is added later.
