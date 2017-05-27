export class HttpClient {
    public static async getAsync<T>(url: string): Promise<T | null> {
        if (!url) {
            return null;
        }

        return new Promise<T | null>((resolve, reject) => {
            let param: WeApp.RequestParam = {
                url: url,
                header: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
                success: (res) => {
                    if (res) {
                        if (res.statusCode == 200) {
                            resolve(res.data as T);
                        } else {
                            console.log('HTTP ERROR: ', res.statusCode, res.errMsg, res.data);
                            resolve(null);
                        }
                    }
                },
            };
            wx.request(param);
        });
    }

    public static async postAsync<T>(url: string, body: string): Promise<T | null> {
        if (!url) {
            return null;
        }

        return new Promise<T | null>((resolve, reject) => {
            let param: WeApp.RequestParam = {
                url: url,
                header: {
                    'Content-Type': 'application/json',
                },
                data: body,
                method: 'POST',
                success: (res) => {
                    if (res) {
                        if (res.statusCode == 200) {
                            resolve(res.data as T);
                        } else {
                            console.log('HTTP ERROR: ', res.statusCode, res.errMsg, res.data);
                            resolve(null);
                        }
                    }
                },
            };
            wx.request(param);

        });
    }
}
