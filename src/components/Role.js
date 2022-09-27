import { Link } from 'react-router-dom';
import '../styles/role.css'

export default function Role({ pathImg, roleText,  role=0, to}) {
    const specialClass = ['student','parents','teacher']
  return (
    <Link className={`role`} to={to} >
      <div className={`role-img ${specialClass[role]}`}>
        <img src={pathImg} alt={roleText} />
      </div>
      <p className="role-lengend">{roleText}</p>
    </Link>
  );
}
