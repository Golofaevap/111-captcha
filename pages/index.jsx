import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

export default function Home() {
    return (
        <div>
            <Head></Head>
            <Grid container>
                <Grid item xs={12}>1</Grid>
                <Grid item xs={12}>2</Grid>
                <Grid item xs={12}>3</Grid>
            </Grid>
        </div>
    );
}
