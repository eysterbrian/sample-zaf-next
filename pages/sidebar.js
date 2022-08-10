import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../components/button';
import { useZafClient } from '../utils/zafClient';

export default function SideBarApp() {
  const zafClient = useZafClient();
  zafClient?.invoke('resize', { width: '100%', height: '200px' });

  return (
    <div className={styles.container}>
      <Head>
        <title>Get Started: Zendesk App Framework with Next.js</title>
        <meta
          name="ZAF and Next Scaffold"
          content="Zendesk app utilizing the Next framework"
        />
      </Head>
      <p>This is the sidebar</p>
      <Button />
    </div>
  );
}
