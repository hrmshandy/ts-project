/**
 *
 * @returns
 */
export function generateId(): string {
    return Math.random().toString(16).slice(2)
}
