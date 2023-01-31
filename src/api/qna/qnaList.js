export const qnaList = async (setQnaList) => {
  fetch(`${process.env.REACT_APP_API_QNA_URL}/index.php`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((res) => {
      setQnaList(res);
    });
};
