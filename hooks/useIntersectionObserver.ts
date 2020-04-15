import { useEffect } from 'react'

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    })

    if (!target) {
      console.warn('No target specified for Intersection Observer')
      return
    }

    observer.observe(target.current);

    // Let's clean up after ourselves.
    return () => {
      observer.unobserve(target.current);
    }
  })
}

export default useIntersectionObserver
