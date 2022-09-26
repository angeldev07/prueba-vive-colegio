import '../styles/role.css'

export default function Role({ pathImg, roleText,  role=0}) {
    const specialClass = ['student','parents','teacher']
  return (
    <div className={`role`} >
      <div className={`role-img ${specialClass[role]}`}>
        <img src={pathImg} alt={roleText} />
      </div>
      <p className="role-lengend">{roleText}</p>
    </div>
  );
}
