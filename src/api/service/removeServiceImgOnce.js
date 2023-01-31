export const removeServiceImgOnce = async (product) => {
  const { id, fileName } = product;
  const formData = new FormData();
  formData.append("fileId", id);
  formData.append("fileName", fileName);

  await fetch(
    `${process.env.REACT_APP_API_SERVICES_URL}/removeServiceImgOnce.php`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => {
      return console.log(res);
    })
    .catch((err) => {
      return err;
    });
};
