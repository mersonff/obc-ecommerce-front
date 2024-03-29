import React from 'react';
import styles from './styles.module.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Logo';
import Image from 'next/image';
import Link from 'next/link';

const StorefrontFooter: React.FC = () => {
    return (
        <footer className={styles.background}>
            <Col md={{ span: 8, offset: 2 }}>
                <Row>
                    <Col lg={7} md={12}>
                        <Row>
                            <Col lg={5} md={12} className="mb-4 mb-lg-0">
                                Acompanhe-nos
                            </Col>

                            <Col lg={7} md={12} className="mb-4 mb-lg-0">
                                <Row className={styles.social_medias}>
                                    <Col lg={1} xs={2}>
                                        <Link href="https://www.facebook.com/onebitcode/" target="_blank">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                        </Link>
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://www.instagram.com/onebitcode/" target="_blank">
                                                <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://www.youtube.com/onebitcode" target="_blank">
                                                <FontAwesomeIcon icon={faYoutube} />
                                        </Link>
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://twitter.com/onebitcode" target="_blank">
                                                <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                    </Col>

                                    <Col lg={1} xs={2}>
                                        <Link href="https://www.linkedin.com/in/leonardo-scorza-onebitcode-7aba352b/" target="_blank">
                                                <FontAwesomeIcon icon={faLinkedin} />
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={{ span: 4, offset: 0 }} xs={{ span: 8, offset: 2 }}>
                        <Row>
                            <Col>
                                <Link href="https://www.onebitcode.com" target="_blank">
                                        Contato
                                </Link>
                            </Col>

                            <Col>
                                <Link href="https://www.onebitcode.com" target="_blank">
                                        Sobre
                                </Link>
                            </Col>

                            <Col>
                                <Link href="https://www.onebitcode.com" target="_blank">
                                        Blog
                                </Link>
                            </Col>

                            <Col>
                                <Link href="https://www.onebitcode.com" target="_blank">
                                        FAQ
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr className={styles.line} />

                <Row>
                    <Col className={styles.logo} lg={{ span: 2, offset: 0 }} xs={{ span: 8, offset: 2 }}>
                        <Logo />
                    </Col>

                    <Col className="text-center" lg={{ span: 6, offset: 1 }} xs={12}>
                        <p style={{ 'color': 'var(--color-gray-light)' }}>onebitcode.com • contato@onebitcode.com</p>
                    </Col>

                    <Col lg={{ span: 2, offset: 1 }} xs={{ span: 6, offset: 3 }}>
                        <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />
                    </Col>
                </Row>
            </Col>
        </footer>
    )
}

export default StorefrontFooter;