/**
 * sleep
 * @param duration to sleep time
 */
export const sleep = (duration: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, duration))
}
