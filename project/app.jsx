/* Happy Numbers — Invite colleagues prototype */
const { useState, useRef, useEffect, useMemo } = React;

/* ---------- Icons ---------- */
const Check = (p) =>
<svg viewBox="0 0 16 16" fill="none" {...p}>
    <path d="M3.8 8.3 L6.7 11.2 L12.2 4.9" stroke="currentColor" strokeWidth="2.2"
  strokeLinecap="round" strokeLinejoin="round" />
  </svg>;

const Info = (p) =>
<svg viewBox="0 0 18 18" fill="currentColor" {...p}>
    <path d="M9 1.5A7.5 7.5 0 109 16.5 7.5 7.5 0 009 1.5zm0 3.1a1 1 0 110 2 1 1 0 010-2zM9 8a.85.85 0 01.85.85v3.6a.85.85 0 01-1.7 0v-3.6A.85.85 0 019 8z" />
  </svg>;

const Search = (p) =>
<svg viewBox="0 0 20 20" fill="none" {...p}>
    <circle cx="8.6" cy="8.6" r="5.4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12.7 12.7 L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>;

const Close = (p) =>
<svg viewBox="0 0 12 12" fill="none" {...p}>
    <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>;

const PlusCircle = (p) =>
<svg viewBox="0 0 20 20" fill="currentColor" {...p}>
    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm.95 5.7v3.35h3.35a.95.95 0 010 1.9H10.95v3.35a.95.95 0 01-1.9 0V10.95H5.7a.95.95 0 010-1.9h3.35V5.7a.95.95 0 011.9 0z" />
  </svg>;

const Spark = (p) =>
<svg viewBox="0 0 14 14" fill="currentColor" {...p}>
    <path d="M7 0c.4 3.3 1.2 4.6 2.9 5.4C8.2 6 7.4 7.3 7 10c-.4-2.7-1.2-4-2.9-4.6C5.8 4.6 6.6 3.3 7 0zM12 8c.2 1.5.6 2.1 1.4 2.5-.8.3-1.2 1-1.4 2.3-.2-1.3-.6-2-1.4-2.3.8-.4 1.2-1 1.4-2.5z" />
  </svg>;

const Download = (p) =>
<svg viewBox="0 0 22 22" fill="none" {...p}>
    <path d="M11 3 V13 M11 13 L6.5 8.5 M11 13 L15.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 16 V18 H18 V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;

const Send = (p) =>
<svg viewBox="0 0 22 22" fill="none" {...p}>
    <path d="M3 11 L19 3 L13 19 L11 12 Z" fill="currentColor" />
  </svg>;

const Avatar = (p) =>
<svg viewBox="0 0 28 28" fill="currentColor" {...p}>
    <circle cx="14" cy="14" r="14" fill="#E7EBEF" />
    <path d="M14 7.5a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2zm0 8.4c3.2 0 7 1.6 7 3.8v1.1c0 .4-.3.7-.7.7H7.7a.7.7 0 01-.7-.7v-1.1c0-2.2 3.8-3.8 7-3.8z" fill="#8A97A5" />
  </svg>;

const Chevron = (p) =>
<svg viewBox="0 0 14 8" fill="none" {...p}>
    <path d="M1 1.5 L7 6.5 L13 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


/* ---------- Data ---------- */
const TEACHERS = [
"Alice Johnson", "Bob Smith", "Charlie Brown", "David Wilson", "Eve Davis",
"Frank Miller", "Grace Lee", "Henry Adams", "Ivy Green", "Jack Black",
"Kathy White", "Liam Brown", "Mia Taylor", "Noah Harris", "Olivia Martin",
"Paul Walker", "Quinn Scott"].
map((name, i) => ({
  id: i,
  name,
  email: name.toLowerCase().replace(/ /g, ".") + "@school.edu"
}));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------- Checkbox ---------- */
function Checkbox({ state }) {
  // state: 'on' | 'off' | 'mixed'
  const cls = state === "on" ? "cb checked" : state === "mixed" ? "cb indeterminate" : "cb";
  return (
    <span className={cls} aria-hidden="true">
      <Check />
      <span className="cb-dash" />
    </span>);

}

/* ---------- Contact row ---------- */
function ContactRow({ t, checked, onToggle }) {
  return (
    <div
      className="contact-row"
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={() => onToggle(t.id)}
      onKeyDown={(e) => {if (e.key === " " || e.key === "Enter") {e.preventDefault();onToggle(t.id);}}}>
      
      <span className="cb-wrap"><Checkbox state={checked ? "on" : "off"} /></span>
      <span>
        <div className="contact-name t-bodyL">{t.name}</div>
        <div className="contact-email t-bodyS">{t.email}</div>
      </span>
    </div>);

}

/* ---------- Threshold dots ---------- */
function Dots({ count }) {
  const filled = Math.min(count, 3);
  const prev = useRef(filled);
  const grew = filled > prev.current;
  const lastFilled = filled - 1;
  useEffect(() => {prev.current = filled;});
  return (
    <div className="dots">
      {[0, 1, 2].map((i) =>
      <span
        key={i}
        className={"dot" + (i < filled ? " filled" : "") + (grew && i === lastFilled ? " pop" : "")}>
        
          <Check />
        </span>
      )}
    </div>);

}

/* ---------- App ---------- */
function App() {
  const [selected, setSelected] = useState(() => new Set());
  const [chips, setChips] = useState([]);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [err, setErr] = useState("");
  const [toast, setToast] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);
  const draftRef = useRef(null);

  const total = selected.size + chips.length;
  const minMet = total >= 3;

  /* filtering */
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TEACHERS;
    return TEACHERS.filter(
      (t) => t.name.toLowerCase().includes(q) || t.email.toLowerCase().includes(q)
    );
  }, [query]);

  /* master state */
  const allCount = TEACHERS.length;
  const masterState =
  selected.size === 0 ? "off" : selected.size === allCount ? "on" : "mixed";

  function toggle(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function toggleAll() {
    setSelected((prev) =>
    prev.size === allCount ? new Set() : new Set(TEACHERS.map((t) => t.id))
    );
  }
  function addChip() {
    const v = draft.trim().toLowerCase();
    if (!v) return;
    if (!EMAIL_RE.test(v)) {setErr("Enter a valid email address.");return;}
    if (chips.includes(v) || TEACHERS.some((t) => t.email === v && selected.has(t.id))) {
      setErr("That email has already been added.");return;
    }
    setChips((c) => [...c, v]);
    setDraft("");
    setErr("");
    requestAnimationFrame(() => draftRef.current && draftRef.current.focus());
  }
  function removeChip(email) {
    setChips((c) => c.filter((e) => e !== email));
  }
  function send() {
    if (!minMet) return;
    setToast(true);
    setTimeout(() => setToast(false), 3200);
  }

  const remaining = 3 - total;

  return (
    <div className="app">
      {/* Header */}
      <header className="hn-header">
        <div className="hn-logo">
          <img className="dino" src="assets/header-dino.svg" alt="" />
          <img className="wordmark" src="assets/happy-numbers-logo.svg" alt="Happy Numbers" />
        </div>
        <button className="hn-account">
          <Avatar className="avatar" />
          <span>My Account</span>
          <Chevron className="chev" width="13" height="7" />
        </button>
      </header>

      <div className="hn-body">
        {/* LEFT */}
        <section className="invite-col">
          <div className="invite-inner">
            <h1 className="invite-title t-h1" style={{ fontWeight: "700", width: "600px" }}>
              Invite at least 3 colleagues to unlock full access to Happy Numbers
            </h1>

            {/* list header */}
            <div className="list-head">
              <div className="list-head-left">
                <div
                  role="checkbox"
                  aria-checked={masterState === "on" ? true : masterState === "mixed" ? "mixed" : false}
                  tabIndex={0}
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={toggleAll}
                  onKeyDown={(e) => {if (e.key === " " || e.key === "Enter") {e.preventDefault();toggleAll();}}}>
                  
                  <Checkbox state={masterState} />
                </div>
                <div className="list-head-title">
                  <span className="t-bodyLb">Maplewood Elementary teacher's list</span>
                  <span
                    className={"info-tip" + (tipOpen ? " is-open" : "")}
                    tabIndex={0}
                    role="button"
                    aria-label="List sourced from your school's staff directory via our partner"
                    aria-expanded={tipOpen}
                    onClick={() => setTipOpen((o) => !o)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setTipOpen((o) => !o); } else if (e.key === "Escape") setTipOpen(false); }}
                    onBlur={() => setTipOpen(false)}>
                    <Info className="info-dot" />
                    <span className="tooltip" role="tooltip">List sourced from your school's staff directory via our partner</span>
                  </span>
                </div>
              </div>
              <label className="search">
                <Search />
                <input
                  type="text"
                  placeholder="Search by name or email"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)} />
                
              </label>
            </div>

            {/* teacher grid */}
            <div className={"teacher-grid" + (visible.length <= 3 ? " few" : "")}>
              {visible.length === 0 ?
              <div className="empty-results">
                  No teachers match “{query.trim()}”. Try a different name — or add them manually below.
                </div> :

              visible.map((t) =>
              <ContactRow key={t.id} t={t} checked={selected.has(t.id)} onToggle={toggle} />
              )
              }
            </div>

            <hr className="invite-divider" />

            {/* manual add */}
            <div className="add-label t-bodyLb">Don't see someone? Add their email manually</div>
            <div className="add-row">
              <input
                ref={draftRef}
                className={"email-input" + (err ? " invalid" : "")}
                type="email"
                placeholder="colleague@school.edu"
                value={draft}
                onChange={(e) => {setDraft(e.target.value);if (err) setErr("");}}
                onKeyDown={(e) => {if (e.key === "Enter") {e.preventDefault();addChip();}}} />
              
              <button className="btn-add" onClick={addChip}>
                <PlusCircle /> Add
              </button>
            </div>
            {err && <div className="add-error t-bodyS">{err}</div>}

            {chips.length > 0 &&
            <div className="chips">
                {chips.map((email) =>
              <span className="chip" key={email}>
                    {email}
                    <button className="chip-x" onClick={() => removeChip(email)} aria-label={"Remove " + email}>
                      <Close />
                    </button>
                  </span>
              )}
              </div>
            }

            <div className="invite-footer">
              <div className="l1 t-cap">© 2026 Happy Numbers. All rights reserved</div>
              <div className="l2 t-cap">
                Use of this website constitutes acceptance of the{" "}
                <a href="#">Privacy Policy</a>, <a href="#">Privacy Policy for Students</a>, and{" "}
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <aside className="info-col">
          <div className="info-inner">
            <div className="info-top">
              <div className="info-eyebrow t-bodySm">You're about to send</div>
              <h2 className={"info-count t-h1" + (total === 0 ? " zero" : "")} style={{ fontSize: 32, lineHeight: "40px" }}>
                {total} invitation{total === 1 ? "" : "s"}
              </h2>
              <p className="info-sub t-bodyL">
                They'll receive a single email from Happy Numbers on your behalf.
              </p>

              <div className="whatget">
                <div className="whatget-h t-bodySb">What they'll get</div>
                {["Free plan access to Happy Numbers", "No credit card required", "One email only — no follow-ups"].map((x) =>
                <div className="whatget-item" key={x}>
                    <Check className="tick" />
                    <span>{x}</span>
                  </div>
                )}
              </div>

              <div className="unlock">
                <div className="unlock-h t-bodySb">Right after sending, you'll unlock</div>
                <div className="unlock-item"><Spark className="spark" /><span>Unlimited practice time for your students</span></div>
                <div className="unlock-item"><Spark className="spark" /><span>Full progress reports and intervention alerts</span></div>
                <div className="unlock-art">
                  <img className="blob" src="assets/mascot-blob.png" alt="" />
                  <img className="dino" src="assets/mascot-dino.png" alt="" />
                  <img className="spk a" src="assets/sparkle.png" alt="" />
                  <img className="spk b" src="assets/sparkle.png" alt="" />
                  <img className="spk c" src="assets/sparkle.png" alt="" />
                </div>
              </div>
            </div>

            <div className="info-bottom">
              <div className="threshold">
                <Dots count={total} />
                {minMet ?
                <span className="threshold-msg ok">
                    <Check style={{ width: 16, height: 16 }} /> Minimum met — ready to send
                  </span> :

                <span className="threshold-msg warn">Add {remaining} to continue</span>
                }
              </div>
              <button className="btn-send" disabled={!minMet} onClick={send}>
                <Send />
                {total > 0 ? `Send ${total} Invitation${total === 1 ? "" : "s"}` : "Send Invitations"}
              </button>
              <div className="nospam t-cap">
                We respect your colleagues' inboxes. <a href="#">Read our no-spam policy.</a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className={"toast" + (toast ? " show" : "")}>
        <span className="badge"><Check /></span>
        {total} invitation{total === 1 ? "" : "s"} sent — full access unlocked!
      </div>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);