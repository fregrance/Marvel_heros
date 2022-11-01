import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import "./css/style.css";


export const QA = () => {
  const [charactername, setCharacter] = useState("");
  const [comicsname, setComics] = useState("");
  const [data, setdata] = useState([]);
  console.log({ charactername });
  console.log({ comicsname });
  console.log("rd=>", data);
  const handlecharacter = (e) => {
    setCharacter(e.target.value);
  };

  const handleselectoption = (e) => {
    setComics(e.target.value);
  };
  // const hidestyle= { display: 'none' }
  const [set, setshow] = useState({ show: true });
  useEffect(() => {
    setshow({ show: true });
  }, []);

  styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleapi = (e) => {
    e.preventDefault();

    axios
      .get("http://gateway.marvel.com/v1/public/characters", {
        params: {
          apikey: "d2ff04e7328601a61e2be206b9587f0c",
          ts: "khushboo",
          hash: "6d8f895064307f6afce7d5925dc6679f",
          name: charactername,
        },
      })
      //.then(result => {console.log(result.data)})
      .then((result) => {
        setdata(result.data.data.results[0]);
        setshow({ show: false });
      })

      .catch((err) => {
        console.log(err);
        
      });
      handleselectoption();
  };

  return (
    <>
      <div className="backgroundimage">
        <div className="bgcover"></div>

        <div role="presentation" className="breadcrumbcss">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="http://localhost:3000/">
          Home
        </Link>
        <Typography color="text.primary">Questions</Typography>
      </Breadcrumbs>
    </div>


        <Container maxWidth="xl">
          {/* <ReactLoading type="balls" color="#0000FF"
        height={100} width={50} /> */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                {/* <p>{data.id}</p> */}
                <Box component="form" noValidate autoComplete="off">
                  <form>
                    <TextField
                      id="outlined-basic"
                      label="Character Name"
                      variant="outlined"
                      value={charactername}
                      required={true}
                      fullWidth
                      onChange={handlecharacter}
                    />

                    <TextField
                      id="outlined-basic"
                      label="What Do you like more: Comics, Series or Stories?"
                      variant="outlined"
                      value={comicsname}
                      onChange={handleselectoption}
                      required={true}
                      fullWidth
                    />

                    <Button
                      variant="contained"
                      size="large"
                      color="warning"
                      onClick={handleapi}
                    >
                      Submit
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Grid item xs={4} className={set.show ? "hidestyle" : ""}>
                {/* Card design here */}
                <Card md={{ maxWidth: 345 }}>
                  {data === [] ? (
                    <></>
                  ) : (
                    <>
                      <CardMedia
                        component="img"
                        height="140"
                        image={
                          data.thumbnail?.path + "." + data.thumbnail?.extension
                        }
                        alt="Hero Image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          {data.modified}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="clrchnge"
                        >
                          {data.resourceURI}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {data.description}
                        </Typography>
                      </CardContent>
                    </>
                  )}
                </Card>
              </Grid>
              <Grid item xs={3}>
                <Card md={{ maxWidth: 345 }}>
                  {comicsname === "comics" || comicsname === "Comics" ? (
                    <>
                      <h2 className="aligntext">Comics</h2>
                      <ul className="aligntext heightoverflow">
                        {data.comics?.items.map((e) => {
                          return <li>{e.name}</li>;
                        })}
                      </ul>
                    </>
                  ) : comicsname === "series" || comicsname === "Series" ? (
                    <>
                      <h2 className="aligntext">Series</h2>
                      <ul className="aligntext heightoverflow">
                        {data.series?.items.map((e) => {
                          return <li>{e.name}</li>;
                        })}
                      </ul>
                    </>
                  ) : comicsname === "stories" || comicsname === "Stories" ? (
                    <>
                      <h2 className="aligntext">Stories</h2>
                      <ul className="aligntext heightoverflow">
                        {data.stories?.items.map((e) => {
                          return <li>{e.name}</li>;
                        })}
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}{" "}
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};
