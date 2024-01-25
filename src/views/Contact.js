import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap"
import "../assets/scss/style.scss"


const Contact = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>contact us</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>This is your second page.</CardText>
          <CardText>
            Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
            Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
            wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
          </CardText>
        </CardBody>
      </Card>
      <form class="form">
        <p class="title">Contact Us </p>
        <p class="message">Email / Phone</p>
        <label>
          <input required="" placeholder="" type="email" class="input" />
          <span>Email</span>
        </label>

        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Password</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Confirm password</span>
        </label>
        <button class="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
