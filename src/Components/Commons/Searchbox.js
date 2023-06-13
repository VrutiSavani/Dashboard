import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Data } from "./Data";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbox() {
    const [Query, setQuery] = useState("");
    console.log(Data.filter(user=>user.Type.includes("Ba")));
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ ml: 1 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ width: 300 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
          {/* <input
              type="text"
              placeholder="Search.."
              className="search"
          onChange={(e) => setQuery(e.target.value)}
          /> */}
          <ul className="list">
              {Data.filter(user=>user.Type.includes(Query)).map((user) => (
              <li key={user.ID} className="listitem"> { user.Income}</li>
              ))}
          </ul>
    </Container>
  );
}