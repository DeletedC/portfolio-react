module.exports = {
  reactStrictMode: true,
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return new Date().toUTCString();
  },
}
