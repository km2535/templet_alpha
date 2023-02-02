export const readBoardDetail = async (ID, setBoard) => {
  const formData = new FormData();
  formData.append("ID", ID);
  fetch(`${process.env.REACT_APP_API_BOARDS_URL}/readBoard.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json())
    .then((res) => {
      setBoard(res);
    });
};
