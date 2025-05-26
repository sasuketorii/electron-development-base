const fs = require('fs');
const path = require('path');

// 検索機能のJavaScriptコード
const searchFunctionCode = `
// 検索機能
function initializeSearch() {
    const searchInput = document.getElementById('top-search');
    const mobileSearchInput = document.querySelector('.dropdown-menu input[type="search"]');
    
    function performSearch(query) {
        if (!query.trim()) return;
        
        // テーブル内を検索
        const tables = document.querySelectorAll('table tbody tr');
        let found = false;
        
        tables.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(query.toLowerCase())) {
                row.style.backgroundColor = '#fff3cd';
                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            } else {
                row.style.backgroundColor = '';
            }
        });
        
        // カード内を検索
        const cards = document.querySelectorAll('.card-body');
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query.toLowerCase())) {
                card.style.backgroundColor = '#fff3cd';
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            } else {
                card.style.backgroundColor = '';
            }
        });
        
        // プロジェクトカード、TODOアイテム、カレンダーイベントなどを検索
        const specialItems = document.querySelectorAll('.project-card, .todo-item, .calendar-day, .d-flex.align-items-center');
        specialItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query.toLowerCase())) {
                item.style.backgroundColor = '#fff3cd';
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            } else {
                item.style.backgroundColor = '';
            }
        });
        
        if (!found) {
            alert('検索結果が見つかりませんでした: ' + query);
        }
    }
    
    // デスクトップ検索
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
        
        // 検索ボタンクリック
        const searchBtn = searchInput.parentElement.querySelector('button');
        if (searchBtn) {
            searchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                performSearch(searchInput.value);
            });
        }
    }
    
    // モバイル検索
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
    }
}
`;

// 対象ファイル一覧
const targetFiles = [
    'renderer/calendar.html',
    'renderer/todolist.html', 
    'renderer/projects.html',
    'renderer/hrm.html',
    'renderer/jobs.html'
];

// 各ファイルに検索機能を追加
targetFiles.forEach(filePath => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // DOMContentLoadedイベントリスナーを探す
        const domContentLoadedRegex = /document\.addEventListener\('DOMContentLoaded',\s*function\(\)\s*\{/;
        
        if (domContentLoadedRegex.test(content)) {
            // 既存のDOMContentLoadedの中にinitializeSearch()を追加
            content = content.replace(
                domContentLoadedRegex,
                `${searchFunctionCode}\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    initializeSearch();`
            );
        } else {
            // DOMContentLoadedが見つからない場合は、最後のscriptタグの前に追加
            const lastScriptRegex = /<script>/g;
            let lastIndex = -1;
            let match;
            
            while ((match = lastScriptRegex.exec(content)) !== null) {
                lastIndex = match.index;
            }
            
            if (lastIndex !== -1) {
                content = content.slice(0, lastIndex) + 
                         `<script>\n${searchFunctionCode}\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    initializeSearch();\n});\n</script>\n\n` +
                         content.slice(lastIndex);
            }
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ 検索機能を追加しました: ${filePath}`);
        
    } catch (error) {
        console.error(`❌ エラー: ${filePath} - ${error.message}`);
    }
});

console.log('🎉 すべてのページに検索機能の追加が完了しました！'); 