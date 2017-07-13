export class HttpClient {
    public static async getAsync<T = boolean>(url: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (!url) {
                resolve(null);
            }
            let param: WeApp.RequestParam = {
                url: url,
                header: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
                success: res => {
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

    public static async postAsync<T = boolean>(url: string, body: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (!url) {
                resolve(null);
            }
            let param: WeApp.RequestParam = {
                url: url,
                header: {
                    'Content-Type': 'application/json',
                },
                data: body,
                method: 'POST',
                success: res => {
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
