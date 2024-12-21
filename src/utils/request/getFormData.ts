export default function getFormData(data: Record<string, any>): string {
    if(!Object.keys(data)) return "";

    let result = [];

    for(const field in data) {
        result.push(`${field}=${data[field]}`);
    }

    return "?" + result.join("&");
}