body {
  margin: 0;
  padding: 0;
}
header {
  box-shadow: 0px 1px 2px #ccc;
  text-align: center;
  width: 100%;
  position: fixed;
  height: 82px;
  background-color: #ffffff;
  /* margin: 0; */
  /* padding: 0; */
  /* height: min-content; */
}
.iransite_demo4 {
  font-size: 28px;
  font-family: dana;
  display: inline;
  width: fit-content;
  height: fit-content;
  margin-right: 90px;
  /* margin-top: 20px; */
}
.nav1 ul ul {
  display: none;
}
.nav ul ul li a {
  text-decoration: none;
  color: black;
}
li a {
  text-decoration: none;
}
ul {
  list-style-type: none;
}
li {
  list-style-type: none;
}
.nav1 {
  height: min-content;
  width: 100%;
  z-index: 57;
}
.nav1 ul :hover > ul {
  display: block;
}
.nav1 ul li a {
  color: black;
}
.nav1 ul {
  margin-top: 13px;
  display: inline-table;
}

.nav1 ul ul {
  display: none;

  color: black;

  list-style-type: none;
}
.nav1 ul {
  background: white;
  list-style: none;
  position: relative;
  display: inline-table;
}
.nav1 ul li {
  float: right;
  font-weight: bold;
}
.nav1 ul li {
  display: block;
  padding: 10px;
}
.nav1 ul:after {
  content: "";
  display: block;
}
.nav1 ul li {
  font-weight: bold;
}
.nav1 ul li a {
  text-decoration: none;
}
.nav1 ul li {
  float: right;
  /* position: relative; */
  font-weight: bold;
}
.nav1 ul ul {
  position: absolute;
  color: black;
  width: 20vw;
}
.nav1 ul ul a {
  color: black;
}
.nav1 ul li ul li {
  width: 15vw;
  display: flex;
  justify-content: right;
  background-color: #fafafa;
}
.footer_menu {
  height: 40px;
  color: white;
  width: 100%;
  background-color: #212121;
  position: fixed;
  bottom: 0;
  display: none;
}
@media screen and (max-width: 640px) {
  header {
    display: none;
  }
  .footer_menu {
    height: 50px;
    color: white;
    width: 100%;
    background-color: #212121;
    position: fixed;
    bottom: 0;
    display: none;
    z-index: 56;
  }
}
@media screen and (max-width: 640px) {
  .footer_menu {
    display: block;
  }
}
.ul10 li {
  padding: 10px;
  /* width: fit-content; */
  cursor: pointer;
  display: inline;
}
.ul10 {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  /* position: fixed; */
}
.ul10 a {
  width: 200px;
}
.ul10 li {
  transition: 2s;
}
.ul10 ul ul {
  transition: 2s;
}
.ul10 li ul li {
  display: block;
  padding: 5px;
  display: none;
  /* height: 0; */
  transition: 2s;
}
.ul10 li:hover > ul li {
  display: block;
  /* height: fit-content; */
}
.centerfooter{
  display: flex;
  justify-content: center;
  align-items: center;
}
