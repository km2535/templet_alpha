export const readService = async (setService) => {
  fetch(`${process.env.REACT_APP_API_SERVICES_URL}/index.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => {
      setService(res);
    });
};
