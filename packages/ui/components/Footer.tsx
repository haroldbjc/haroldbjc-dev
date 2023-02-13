import React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../assets/logo/logo.svg";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    color: theme.white ? theme.colors.gray[9] : theme.white,
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    textDecoration: "none",
    "& > *:not(:last-child)": {
      marginRight: 5,
    },
    padding: "5px 15px 5px 10px",
    borderRadius: theme.radius.xl,
    transition: "transform 0.2s ease",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link className={classes.brand} href="/">
          <Image src={LOGO.src} alt="Logo" width="28" height="28" />
          <Text>Harold</Text>
        </Link>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
