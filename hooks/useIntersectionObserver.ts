import { useEffect } from 'react'

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
}) => {
  useEffect(() => {
    if (!window.IntersectionObserver) {
      return
    }

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    })

    observer.observe(target.current)

    // Let's clean up after ourselves.
    return () => {
      observer.unobserve(target.current)
    }
  }, [target.current])
}

export default useIntersectionObserver
