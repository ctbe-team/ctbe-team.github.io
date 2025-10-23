# Security Policy
This is the security guidelines for reporting any vulnerabilities with any of our services.
## Supported Versions

| Version | Supported |
|---------|-----------|
| `master` (development) | ✅ |
| `v1.x` (current stable) | ✅ |
| `v0.x` (legacy) | ❌ |

> **Note:** Only the versions marked as “✅” receive security updates. Older, unsupported releases are listed for reference but will not receive patches.

---

## Reporting a Vulnerability

We take security reports seriously and aim to respond promptly. To report a vulnerability:

1. **Do not publish** the vulnerability publicly until we have had a chance to address it.
2. Send an email to **security-ctbe-team@proton.me**.  
   - Include a clear, concise description of the issue.  
   - Provide steps to reproduce the vulnerability (if applicable).  
   - Attach any relevant proof‑of‑concept code or logs.  
   - Indicate the severity you believe the issue has (e.g., low, medium, high, critical).  

We will acknowledge receipt of your report within **48 hours** and keep you updated on our progress.

---

## Preferred Disclosure Timeline

| Severity | Expected Fix Window |
|----------|----------------------|
| Zero Day | As soon as possible|
| Critical | ≤ 14 days |
| High     | ≤ 30 days |
| Medium   | ≤ 60 days |
| Low      | ≤ 90 days |

If a fix cannot be released within the stated window (e.g., due to dependencies or coordination with third‑party vendors), we will communicate the reason and provide an adjusted timeline.

---

## Public Disclosure

Once a fix is released (or a reasonable mitigation is in place), we will:

- Publish a security advisory on our website and in the repository’s **Releases** page.  
- Include CVE identifiers where applicable.  
- Credit the reporter (unless they request anonymity).

If you wish to remain anonymous, please let us know in your initial report.

---

## Responsible Disclosure Guidelines

- Do not exploit the vulnerability beyond what is necessary to confirm its existence.  
- Do not access, modify, or delete data that does not belong to you.  
- Do not launch denial‑of‑service attacks against our services.  
- Share findings only with the designated security contact above.

Violating these guidelines may result in a refusal to accept the report.

---


## Contact Information

- **Primary security contact:** security-ctbe-team@proton.me  
-**General Contact:** ctbe-team@proton.me
