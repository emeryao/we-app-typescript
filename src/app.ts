App({
    onLaunch: async () => {
        console.log('on launch', new Date());
        await sleep(5000);
        console.log('after await sleep', new Date());
    },
});

async function sleep(timeout: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(resolve, timeout);
    });
}
