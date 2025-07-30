export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export function generateRandomPrime(min: number, max: number): number {
  if (min > max) {
    throw new Error('Invalid range: min must be less than or equal to max.');
  }
  const primes: number[] = [];
  for (let i = Math.max(min, 2); i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  if (primes.length === 0) {
    throw new Error(`No primes found in range ${min} to ${max}.`);
  }
  const randomIndex = Math.floor(Math.random() * primes.length);
  return primes[randomIndex];
}