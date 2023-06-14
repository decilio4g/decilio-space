import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoPawOutline } from "react-icons/io5";

import { Collapse, ListItemText } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import { ListItem } from "../../constants/index";

import styles from "./style.module.scss";

export default function Header() {
  const [alignment, setAlignment] = React.useState("left");
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = React.useState("");

  const open = Boolean(anchorEl);

  const handleClick = (event, url) => {
    setAnchorEl(event.currentTarget);
    setShow(url);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setOpenCollapse(!openCollapse);
  };

  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.containerImage}>
            <img src="/images/LogoHeader.png" alt="Logo" />
          </div>
          <nav>
            <div className={styles.toggle}>
              <ToggleButtonGroup
                style={{ background: "#FFF" }}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

            <ul className={styles.ListItem}>
              {ListItem.map((item, index) => {
                return (
                  <div key={index}>
                    <Link key={item.name} href={item.url}>
                      <li
                        className={`${styles.Item} ${
                          item.url == router.pathname && styles.active
                        }`}
                      >
                        <div>
                          <IoPawOutline
                            className={styles.icon}
                            color={"#b76719"}
                            size={24}
                          />
                        </div>

                        {item.name}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <div className={styles.collapse}>
        <Collapse in={openCollapse} timeout="auto">
          {ListItem.map((item) => {
            return (
              <Link key={item.name} href={item.url}>
                <ListItemText
                  className={styles.itemCollapse}
                  primary={item.name}
                />
              </Link>
            );
          })}
        </Collapse>
      </div>
    </>
  );
}
