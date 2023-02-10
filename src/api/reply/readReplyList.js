export const readReplyList = async (id, setReply) => {
  const formData = new FormData();
  formData.append("ID", id);
  fetch(`${process.env.REACT_APP_API_REPLY_URL}/readReplyList.php`, {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json())
    .then((res) => {
      setReply(res);
    });
};
