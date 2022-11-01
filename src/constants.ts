// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

export const version = '4.0.0-alpha.5';

export enum HeaderName {
    contentType = 'content-type',
    contentDisposition = 'content-disposition',
}

export enum MediaType {
    multipartForm = 'multipart/form-data',
    urlEncodedForm = 'application/x-www-form-urlencoded',
    octetStream = 'application/octet-stream',
    json = 'application/json',
}

export const returnBindingKey = '$return';
