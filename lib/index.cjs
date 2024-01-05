module.exports = async function () {
  const module = await import("./zohocrmsdk.js");
  return module;
};