// Optimized with https://jakearchibald.github.io/svgomg/
export default function Wave() {
  return (
    <span>
      <svg
        width='1568'
        height='322'
        viewBox='0 0 1568 322'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='none' fillRule='evenodd'>
          <path
            d='M1568 126.16V321H0V186.751c356.911 34.946 630.911 14.911 822-60.104 190.674-74.852 439.34-75.014 746-.487z'
            fill='#FFF'
          />
          <path
            d='M1567.96 126.647v50.876c-189.835-41.554-473.116-147.698-743.929 0C626.208 285.414 318.357 289.73-99.523 190.47L0 65.929v120.822c356.911 34.946 630.911 14.911 822-60.104 191.089-75.014 439.742-75.014 745.96 0z'
            fillOpacity='.2'
            fill='#085886'
          />
        </g>
      </svg>
      <style jsx>
        {`
          svg {
            width: 100%;
            height: auto;
            margin-bottom: -15px;
          }
        `}
      </style>
    </span>
  )
}
