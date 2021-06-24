import * as React from 'react';

function SvgReload(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
            width="1em"
            height="1em"
            {...props}
        >
            <path d="M16.1 28.9c1.8.1 2.7-.7 2.7-2.3 0-1.6-1.1-2.7-2.7-2.7H9.4C12.6 13 22.4 5.3 33.9 5.3c11.7 0 21.8 8 24.7 19.4.3 1.3 1.9 2.4 3.2 1.9 1.3-.3 2.4-1.9 1.9-3.2C59.9 9.6 47.7 0 33.6 0 21.1 0 10.2 7.7 5 19.1v-5.8c0-1.4-.6-2.7-2.2-2.7S.1 11.7 0 13.3v12.5c.1 1.9 1.6 3.2 3.6 3.1h12.5zM60.4 36.9H48.7c-.8 0-1.7.2-2.3.7-.7.5-1.2 1.3-1.2 2.3 0 1.3 1.2 2 2.7 2h6.6c-3.7 10.2-13 16.6-23.4 16.6-10.9 0-20.4-6.9-23.9-17.5-.5-1.3-1.9-2.1-3.5-1.6-1.3.5-2.1 1.9-1.6 3.5C6.5 55.5 17.9 64 31.2 64c11.7 0 22-6.6 27.8-17v6.1c.1 1.5.6 2.7 2.2 2.7s2.7-1.1 2.8-2.7V40.6c-.1-1.8-1.7-3.4-3.6-3.7z" />
        </svg>
    );
}

export default SvgReload;
