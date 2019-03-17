import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const Robots = ({robots}) => {
    return (
    <div>
        <h1>Cool robots</h1>
        <Link href={'/'}>
            <button>Home</button>
        </Link>
        <h2> Robo-data </h2>
        <div>
            {
                robots.map(robot => (
                    <li key={robot.id}>
                        <Link href={`/robot?id=${robot.id}`}>
                            <a>{robot.name}</a>
                        </Link>
                    </li>
                ))
            }
        </div>
    </div>
    )
};

Robots.getInitialProps = async function () {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    return {
        robots: data
    }
};

export default Robots;