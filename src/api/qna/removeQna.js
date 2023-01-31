export const removeQna = async (qna, password) => {
  const { ID } = qna;
  const formData = new FormData();
  formData.append("ID", ID);
  formData.append("PASSWORD", password);
  await fetch(`${process.env.REACT_APP_API_QNA_URL}/removeQna.php`, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
