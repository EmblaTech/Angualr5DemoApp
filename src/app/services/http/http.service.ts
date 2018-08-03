import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

    private baseUrl: 'https://reqres.in/api/';
    private totalRequests: number = 0;

    constructor(private http: HttpClient,private router: Router) {

    }

    private _setEndpoint() {
        this.baseUrl = 'https://reqres.in/api/';
    }

    private handleError(error: Response, router: Router) {
        return Observable.throw(error || 'Server error');
    }

    private onFinally(): void {
        this.afterRequest();
    }

    private afterRequest(): void {
        this.totalRequests -= 1;
    }

    private beforeRequest(): void {
        this.totalRequests += 1;
    }

    public getAccessToken<T>(userName: string, password: string): Observable<T> {
        var path = "token";
        var body = "grant_type=password&username=" + userName + "&password=" + password;

        var accessToken = this.http.post<T>(this.baseUrl + path, body)
            .catch(error => this.handleError(error, this.router))
            .finally(() => this.onFinally());

        return accessToken;
    }

    public getStringOutput<T>(path: string): Observable<T> {
        this.beforeRequest();
        return this.http.get<T>(this.baseUrl + path)
            .catch(error => this.handleError(error, this.router))
            .finally(() => this.onFinally());
    }

    public getObjects<T>(path: string): Observable<T[]> {
        this.beforeRequest();
        return this.http.get<T>(this.baseUrl + path)
            .catch(error => this.handleError(error, this.router))
            .finally(() => this.onFinally());
    }

    public getObject<T>(path: string) {
        this.beforeRequest();
        return this.http.get<T>(this.baseUrl + path)
            .catch(error => this.handleError(error, this.router))
            .finally(() => this.onFinally());
    }

    public sendObjects<T>(path: string, object: T) {
        this.beforeRequest();
        return this.http.post<T>(this.baseUrl + path, object)
            .catch(error => this.handleError(error, this.router))
            .finally(() => this.onFinally());
    }

    public sendReceiveObject<T, U>(path: string, object: T): Observable<U> {
        this.beforeRequest();

        return this.http.post<U>(this.baseUrl + path, object)
            .catch(error =>
                this.handleError(error, this.router))
            .finally(() =>
                this.onFinally());
    }

    public updateObjects<T>(path: string, object: T) {
        this.beforeRequest();
        return this.http.put<T>(this.baseUrl + path, object)
            .catch(error => this.handleError(error, this.router))
            .finally(() => this.onFinally());

    }

    public deleteObject<T>(path: string) {
        this.beforeRequest();
        return this.http.delete<T>(this.baseUrl + path)
            .catch(error => this.handleError(error, this.router))
            .finally(() => this.onFinally());
    }

}