import axios from "axios";

const baseUrl = "http://localhost:4501/todo";

const getApiConfig = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("Un-Authorized attempt: Please sign-in first!");
    return null;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
};

const getAllToDo = async (setToDo) => {
  try {
    const config = getApiConfig();

    if (!config) {
      return;
    }

    await axios.get(`${baseUrl}/read`, config).then(({ data }) => {
      setToDo(data);
      localStorage.setItem("todos", data.length);
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

const addToDo = (todo, setToDo) => {
  const config = getApiConfig();

  if (!config) {
    return;
  }
  axios
    .post(`${baseUrl}/create`, todo, config)
    .then(() => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (todo, setToDo) => {
  const config = getApiConfig();

  if (!config) {
    return;
  }
  axios
    .put(`${baseUrl}/update`, { data: todo }, config)
    .then(() => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (todo, setToDo) => {
  const config = getApiConfig();

  if (!config) {
    return;
  }
  axios
    .delete(`${baseUrl}/delete`, { ...config, data: todo })
    .then(() => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const bulkUploadToDo = async (file, onSuccess, onError) => {
  const config = getApiConfig();

  if (!config) {
    onError("Un-Authorized attempt: Please sign-in first!");
    return;
  }

  const formData = new FormData();
  formData.append("csvFile", file);

  try {
    const response = await axios.post(
      `${baseUrl}/bulkUpload`,
      formData,
      config
    );
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    console.error("Error uploading CSV file:", error);
    if (onError) {
      onError("Failed to upload CSV file");
    }
  }
};

export { getAllToDo, addToDo, updateToDo, deleteToDo, bulkUploadToDo };
