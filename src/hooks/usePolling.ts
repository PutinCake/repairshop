import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * A custom hook that polls for data by refreshing the page at a given interval.
 * Polling is only active when the `active` parameter is true.
 * @param active Controls whether polling is enabled.
 * @param interval The polling interval in milliseconds. Defaults to 60000ms (1 minute).
 */
export function usePolling(active: boolean, interval: number = 60000) {
    const router = useRouter()

    useEffect(() => {
        // Only set up the interval if polling is active.
        if (!active) {
            return;
        }

        const intervalId = setInterval(() => router.refresh(), interval);

        // The cleanup function will run when the component unmounts or when `active` becomes false.
        return () => clearInterval(intervalId);
    }, [active, interval, router]);
}