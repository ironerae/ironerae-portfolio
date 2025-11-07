export default (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
