import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const [conect, setConect] = useState();
  const [Data, setdata] = useState([]);
  useEffect(() => {
    setConect(params.id);
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setdata(res.data);
    });
  }, [params.id]);

  const filter = Data.filter((data) => data.id == conect);
  return (
    <div>
        
      {filter.map((i, id) => (
        <h1 key={id}>{i.id} . {i.title}</h1>
        
      ))}
      
    </div>
  );
};

export default Details;
