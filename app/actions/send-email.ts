type FormType = 'contact' | 'floating' | 'quiz'

interface ContactFormData {
    type: 'contact'
    mail: string
    name: string
    organization: string
    phone: string
}

interface FloatingFormData {
    type: 'floating'
    phone: string
    name: string
    email: string
}

interface QuizFormData {
    type: 'quiz'
    orgForm: string
    hasEmployees: string
    cloudStorage: string
    hasWebsite: string
    websiteUrl?: string
    services: string[]
    contactMethod: string
    contactValue: string
}

type FormData = ContactFormData | FloatingFormData | QuizFormData

export async function sendEmail(data: FormData): Promise<{ success: boolean; error?: string }> {
    try {
        const res = await fetch('/api/send-email.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        const result = await res.json()
        return result
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        return { success: false, error: message }
    }
}
