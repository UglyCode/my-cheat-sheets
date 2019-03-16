import Link from 'next/link';
import Image from '../components/image';
// import fetch from

const  About = () => (
    <div style={{fontsize: '19px', color: 'green'}}>
        <h1>Learn to code is fun! Web-stuff are amazing</h1>
        <Image/>
        <Link href={'/'}>
            <button>Back</button>
        </Link>
    </div>
);

export default About;