import type { User } from "models";

import { Link } from "react-router-dom";

type Props = {
  user: User;
};

const ProfilePage: React.FC<Props> = ({ user }) => {
  const { name, username, email, phone, website, company } = user;

  return (
    <div>
      <Link to="/" className="link">
        Home
      </Link>
      <div className="user__container">
        <h2 className="name">{name}</h2>
        <div className="body__container">
          <div className="company__container">
            <h4 className="subtitle">Company</h4>
            <h5 className="company__name">{company?.name}</h5>
            <p className="company__phrase">{company?.catchPhrase}</p>
          </div>
          <h4 className="subtitle">Contacts</h4>
          <p className="contact username">{username}</p>
          <p className="contact email">{email}</p>
          <p className="contact website">{website}</p>
          <p className="contact phone">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
