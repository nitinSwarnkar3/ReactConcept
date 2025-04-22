# React Concepts

# Parcel

- Dev build
- Local Server
- HMR Hot Model Replacement - lets you update parts of your web app instantly without refreshing the whole page.
- Uses File watching algorithms = written in C++
- Caching - Faster builts = Instead of rebuilding everything from scratch, the tool reuses the cached parts.
- Do Image Optimization
- Minification
- It also bundles the files
- It also compresses the files
- Consistent Hashing = Parcel uses to give your files a unique name based on their content — and only change it when the content actually changes.
- Differential Bundling = Parcel creates different versions of your JavaScript code depending on the browser's capabilities — so new browsers get modern code, and older browsers get compatible code.

- Tree shaking = It means it removes the unused code
