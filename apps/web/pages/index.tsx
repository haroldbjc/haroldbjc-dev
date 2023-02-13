import { createStyles, Button, Container, Text } from "@mantine/core";
import Head from "next/head";

export default function Web() {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>{"Harold's Website"}</title>
      </Head>
      <Container>
        <div className={classes.root}>
          <Text size="xl">May all the beauty be blessed.</Text>
          <Button onClick={() => alert("May all the beauty be blessed.")}>
            Button
          </Button>
        </div>
      </Container>
    </>
  );
}

const useStyles = createStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
    minHeight: "100vh",
  },
}));
