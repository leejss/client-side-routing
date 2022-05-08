const createPages = (container: any) => {
  const home = () => {
    container.innerHTML = `
      <h1>Home Page</h1>
    `;
  };
  const list = () => {
    container.innerHTML = `
      <h1>List Page</h1>
    `;
  };
  const detail = () => {
    container.innerHTML = `
      <h1>Detail Page</h1>
    `;
  };

  const notFound = () => {
    container.innerHTML = `
      <h1>NotFound Page</h1>
    `;
  };

  // return map of pages
  return {
    home,
    list,
    detail,
    notFound,
  };
};

export default createPages;
