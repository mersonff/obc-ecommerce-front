import { Col, Row } from 'react-bootstrap';

import styles from './styles.module.css';
import Link from 'next/link';

interface MenuProps {
  tab?: string;
}

const Menu: React.FC<MenuProps> = ({ tab }) => {
  return (
    <Row className={`mt-4 mb-4 text-center ${styles.container}`}>
      <Col sm={3} xs={6}>
        <Link href="/Profile" className={(tab === 'personal_data' ? styles.active : undefined)}>
            Meus Dados
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Orders/List" className={(tab === 'orders' ? styles.active : undefined)}>
            Meus Pedidos
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Games" className={(tab === 'my_games' ? styles.active : undefined)}>
            Meus Games
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Wishlist" className={(tab === 'desired_games' ? styles.active : undefined)}>
            Games Desejados
        </Link>
      </Col>
    </Row>
  );
}

export default Menu;