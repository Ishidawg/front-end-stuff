import logo from '../../assets/logo.svg';

function Header() {

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      color: '#808080',
      zIndex: '1000',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}>
        <img src={logo} alt="Logo" />
        <p>Ferramemta de aprendizado de calculo</p>
      </div>
      <div
        style={{
          marginRight: '12px',
        }}>
        <p>07/06/2022</p>
      </div>
    </div>
  )
}

export default Header