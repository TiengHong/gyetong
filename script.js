 // Lucide SVG 아이콘 엔진 가동
        lucide.createIcons();

        /*
          [전문용어 설명]
          * Demultiplexer(디멀티플렉서): 하나의 입력 신호를 받아 다수의 출력선 중 하나를 선택해 내보내는 조합 논리 회로입니다.
          * 이진 데이터: 0 또는 1의 전압 신호 상태에 대응되는 논리적 컴퓨터 정보 수치입니다.
        */

        // 인터랙티브 디지털 계통도 생성 연산 로직
        function generatePhylogeneticTree() {
            const canvas = document.getElementById('tree-canvas');
            canvas.innerHTML = ""; // 기존 대기 화면 비우기

            const treeHTML = `
                <div class="w-full flex flex-col items-center space-y-8 text-xs font-semibold relative">
                    
                    <!-- Root Node (전압 입력단에 해당하는 출발지점) -->
                    <div class="bg-emerald-950 border-2 border-emerald-500 rounded-xl px-4 py-3 text-center shadow-lg max-w-[200px] z-10 tree-node-active">
                        <p class="text-emerald-400 text-[10px] font-mono">ROOT NODE</p>
                        <p class="text-white text-sm font-bold">대상 식물군 (5종)</p>
                    </div>

                    <!-- 1차 형질 분기 (관다발 조직 존재 여부 검사) -->
                    <div class="w-full grid grid-cols-2 gap-10 relative">
                        <div class="absolute left-1/4 right-1/4 top-0 h-[2px] bg-emerald-800"></div>
                        <div class="absolute left-1/2 top-[-32px] w-[2px] h-[32px] bg-emerald-800"></div>
                        <div class="absolute left-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>
                        <div class="absolute right-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>

                        <!-- Left Column: 관다발 없는 그룹 [0] (선태식물군 진입) -->
                        <div class="flex flex-col items-center space-y-3">
                            <div class="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-2 rounded-lg text-center max-w-[150px]">
                                <span class="bg-slate-700 text-white font-mono px-1 py-0.5 rounded text-[9px]">관다발 = 0</span>
                                <p class="mt-1 font-bold">선태식물군</p>
                            </div>
                            <!-- 리프 노드 출력 -->
                            <div class="bg-emerald-900 border border-emerald-500 text-emerald-100 px-3 py-1.5 rounded-md text-center max-w-[120px] shadow-md">
                                <i data-lucide="leaf" class="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400"></i>
                                <p class="font-bold">우산이끼</p>
                            </div>
                        </div>

                        <!-- Right Column: 관다발 있는 그룹 [1] (진화적 상위 군락 진입) -->
                        <div class="flex flex-col items-center space-y-4">
                            <div class="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-2 rounded-lg text-center max-w-[150px]">
                                <span class="bg-slate-700 text-white font-mono px-1 py-0.5 rounded text-[9px]">관다발 = 1</span>
                                <p class="mt-1 font-bold">관다발식물군</p>
                            </div>

                            <!-- 2차 형질 분기 (종자 형성 여부 검사) -->
                            <div class="w-full grid grid-cols-2 gap-4 relative pt-4">
                                <div class="absolute left-1/4 right-1/4 top-0 h-[2px] bg-emerald-800"></div>
                                <div class="absolute left-1/2 top-[-16px] w-[2px] h-[32px] bg-emerald-800"></div>
                                <div class="absolute left-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>
                                <div class="absolute right-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>

                                <!-- Left Sub: 종자가 없는 식물군 [0] (양치식물군 낙점) -->
                                <div class="flex flex-col items-center space-y-2">
                                    <div class="bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1.5 rounded-lg text-[10px] text-center">
                                        <span class="bg-slate-700 text-white font-mono px-1 py-0.5 rounded">종자 = 0</span>
                                        <p class="mt-1 font-bold">양치식물군</p>
                                    </div>
                                    <div class="bg-emerald-900 border border-emerald-500 text-emerald-100 px-2.5 py-1.5 rounded-md text-center max-w-[100px] shadow-md">
                                        <i data-lucide="leaf" class="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400"></i>
                                        <p class="font-bold">고사리</p>
                                    </div>
                                </div>

                                <!-- Right Sub: 종자가 있는 식물군 [1] -->
                                <div class="flex flex-col items-center space-y-4">
                                    <div class="bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1.5 rounded-lg text-[10px] text-center">
                                        <span class="bg-slate-700 text-white font-mono px-1 py-0.5 rounded">종자 = 1</span>
                                        <p class="mt-1 font-bold">종자식물군</p>
                                    </div>

                                    <!-- 3차 형질 분기 (밑씨를 감싸는 씨방 발달 유무 검사) -->
                                    <div class="w-full grid grid-cols-2 gap-4 relative pt-4">
                                        <div class="absolute left-1/4 right-1/4 top-0 h-[2px] bg-emerald-800"></div>
                                        <div class="absolute left-1/2 top-[-16px] w-[2px] h-[32px] bg-emerald-800"></div>
                                        <div class="absolute left-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>
                                        <div class="absolute right-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>

                                        <!-- Left Sub: 씨방 없음 [0] (겉씨식물=나자식물군 낙점) -->
                                        <div class="flex flex-col items-center space-y-2">
                                            <div class="bg-slate-800 text-slate-300 border border-slate-700 px-1.5 py-1 rounded-lg text-[9px] text-center">
                                                <span class="bg-slate-700 text-white font-mono px-0.5 py-0.5 rounded">씨방 = 0</span>
                                                <p class="mt-0.5 font-bold">나자식물군</p>
                                            </div>
                                            <div class="bg-emerald-900 border border-emerald-500 text-emerald-100 px-2 py-1.5 rounded-md text-center max-w-[80px] shadow-md">
                                                <i data-lucide="leaf" class="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400"></i>
                                                <p class="font-bold">소나무</p>
                                            </div>
                                        </div>

                                        <!-- Right Sub: 씨방 있음 [1] (속씨식물=피자식물군 진입) -->
                                        <div class="flex flex-col items-center space-y-4">
                                            <div class="bg-slate-800 text-slate-300 border border-slate-700 px-1.5 py-1 rounded-lg text-[9px] text-center">
                                                <span class="bg-slate-700 text-white font-mono px-0.5 py-0.5 rounded">씨방 = 1</span>
                                                <p class="mt-0.5 font-bold">피자식물군</p>
                                            </div>

                                            <!-- 4차 하위 분류 분기 (잎맥 형태 분석에 의한 분류 구조) -->
                                            <div class="w-full grid grid-cols-2 gap-2 relative pt-4">
                                                <div class="absolute left-1/4 right-1/4 top-0 h-[2px] bg-emerald-800"></div>
                                                <div class="absolute left-1/2 top-[-16px] w-[2px] h-[32px] bg-emerald-800"></div>
                                                <div class="absolute left-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>
                                                <div class="absolute right-1/4 top-0 w-[2px] h-[20px] bg-emerald-800"></div>

                                                <!-- 그물맥 그룹 (쌍떡잎식물강) -->
                                                <div class="flex flex-col items-center space-y-1">
                                                    <span class="text-[8px] text-slate-400">쌍떡잎/그물맥</span>
                                                    <div class="bg-emerald-900 border border-emerald-500 text-emerald-100 px-1.5 py-1 rounded-md text-center shadow-md">
                                                        <p class="font-bold">장미</p>
                                                    </div>
                                                </div>

                                                <!-- 평행맥 그룹 (외떡잎식물강) -->
                                                <div class="flex flex-col items-center space-y-1">
                                                    <span class="text-[8px] text-slate-400">외떡잎/평행맥</span>
                                                    <div class="bg-emerald-900 border border-emerald-500 text-emerald-100 px-1.5 py-1 rounded-md text-center shadow-md">
                                                        <p class="font-bold">백합</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            `;

            canvas.innerHTML = treeHTML;
            lucide.createIcons();

            showToast("실시간 계통도 렌더링 완료!");
        }

        // 보고서 텍스트 복사 핸들러 함수
        // function copyReportText() {
        //     const reportText = document.getElementById('report-text-area').innerText;
        //     const textarea = document.createElement('textarea');
        //     textarea.value = reportText;
        //     document.body.appendChild(textarea);
        //     textarea.select();
        //     document.execCommand('copy');
        //     document.body.removeChild(textarea);

        //     showToast("보고서 내용이 클립보드에 안전하게 복사되었습니다.");
        // }
        
        // 알림 토스트 출력 유틸리티 함수
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            toastMsg.textContent = message;
            
            toast.className = toast.className.replace("opacity-0 translate-y-20", "opacity-100 translate-y-0");
            setTimeout(() => {
                toast.className = toast.className.replace("opacity-100 translate-y-0", "opacity-0 translate-y-20");
            }, 3000);
        }