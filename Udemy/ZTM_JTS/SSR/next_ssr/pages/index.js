import Link from 'next/link';

const  Index = () => (
    <div>
        <h1>NEXT SSR REACT SUPER MAGIC! Here</h1>
        <Link href={'/about'}>
            <button>client-about</button>
        </Link> <br/>
        <Link href={'/robots'}>
            <button>See Robots</button>
        </Link> <br/>
        <a href={'/about'}>About</a>
    </div>
);

export default Index;